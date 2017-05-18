run: bundle
	bundle exec jekyll serve

clean:
	rm -rf _site

test: build
	bundle exec rspec spec

build: bundle
	bundle exec jekyll build

bundle:
	bundle check || bundle install
