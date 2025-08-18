### OpenID Connect Errors

<div>
  <h4>Authorization</h4>
  <dl class="usa-accordion usa-accordion--bordered">
    {% for error in site.data.errors.oidc.auth %}
      {% include accordion.html content=error.content accordion_id=error.accordion-id  title=error.title id=error.id %}
    {% endfor %}
  </dl>
  <h4>Logout</h4>
  <dl class="usa-accordion usa-accordion--bordered">
    {% for error in site.data.errors.oidc.logout %}
      {% include accordion.html content=error.content accordion_id=error.accordion-id  title=error.title id=error.id %}
    {% endfor %}
  </dl>
  <h4>Token</h4>
  <dl class="usa-accordion usa-accordion--bordered">
    {% for error in site.data.errors.oidc.token %}
      {% include accordion.html content=error.content accordion_id=error.accordion-id  title=error.title id=error.id %}
    {% endfor %}
  </dl>
  <h4>Userinfo endpoint</h4>
  <dl class="usa-accordion usa-accordion--bordered">
    {% for error in site.data.errors.oidc.userinfo %}
      {% include accordion.html content=error.content accordion_id=error.accordion-id  title=error.title id=error.id %}
    {% endfor %}
  </dl>
</div>
