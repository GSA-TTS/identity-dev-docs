module Jekyll
  module CopyToDestination
    class CopyGenerator < Generator
      def generate(site)
        folders = site.config['copy_to_destination'] || []

        static_files = folders.map do |relative_path|
          absolute_path = File.join(site.source, relative_path)
          folder_path = File.dirname(absolute_path)
          entries = Dir.glob(File.join(absolute_path, '**', '*'))
          files = entries.select { |f| File.file?(f) }

          files.map do |file|
            relative_directory = File.dirname(file).sub(folder_path, '')
            filename = File.basename(file)
            StaticFile.new(site, folder_path, relative_directory, filename)
          end
        end.flatten

        site.static_files.concat(static_files)
      end
    end
  end
end
