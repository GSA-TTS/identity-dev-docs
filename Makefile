run:
	make -j2 serve watch-css

serve:
	bundle exec jekyll serve --host 0.0.0.0 --incremental

watch-css:
	npm run watch:css

clean:
	rm -rf _site

test: build
	bundle exec rspec spec

htmlproofer:
	bundle exec scripts/htmlproofer

build-site:
	bundle exec jekyll build

build-css:
	npm run build:css

build: build-site build-css

install-dependencies: bundle npm

lint-js:
	npm run lint

npm:
	npm ci

bundle:
	bundle check || bundle install

setup: install-dependencies
