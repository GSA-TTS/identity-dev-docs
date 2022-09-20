require 'webrick'

module Jekyll
  module Commands
    class Serve
      class Servlet < WEBrick::HTTPServlet::FileHandler
        prepend(Module.new do
          def do_GET(req, res)
            res.header.merge!('Content-Disposition' => 'attachment') if req.path.end_with?('.yml')
            super
          end
        end)
      end
    end
  end
end
