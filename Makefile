run:
	make -j2 serve watch-css

serve:
	bundle exec jekyll serve --host 0.0.0.0 --incremental

watch-css: _site/assets/css
	npm run watch:css

clean:
	rm -rf _site

test: build
	bundle exec rspec spec

build-site:
	bundle exec jekyll build

build-css: _site/assets/css
	npm run build:css

build: build-site build-css

install-dependencies: bundle npm

npm:
	npm ci

bundle:
	bundle check || bundle install

setup: install-dependencies

_site/assets/css:
	mkdir -p _site/assets/css
