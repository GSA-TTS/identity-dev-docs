FROM ruby:2.5

# Environment Variables
ENV LC_ALL=C.UTF-8

# We need NodeJS too. Nodesource is official repo
# https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

# Bundle install first for a simple gem cache
COPY Gemfile* /tmp/
WORKDIR /tmp
RUN bundle install

# Set app working directory and copy app there.
ENV app /identity-dev-docs
RUN mkdir $app
WORKDIR $app
ADD . $app

# Build the Jekyll site
RUN bundle exec jekyll build

# Build USWDS
RUN npm run build-uswds
RUN npm ci

CMD bundle exec jekyll serve --host 0.0.0.0 --incremental