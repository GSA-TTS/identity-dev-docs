run: install-dependencies
	bundle exec jekyll serve --host 0.0.0.0 --incremental

clean:
	rm -rf _site

test: build
	bundle exec rspec spec

build: install-dependencies
	bundle exec jekyll build

install-dependencies: bundle npm

htmlproofer: htmlproofer_internal htmlproofer_external

htmlproofer_internal: build
	bundle exec scripts/htmlproofer --internal

htmlproofer_external: build
	bundle exec scripts/htmlproofer --external \
		--retry-external 3 \
		--retry-external-delay 8 \
		--url-ignore zendesk.login.gov \
		--url-ignore logingov.zendesk.com

npm:
	npm ci

bundle:
	bundle check || bundle install
