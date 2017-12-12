# model-errors

Add errors to a model.

## Getting started

```bash
npm install model-errors --save
```

```javascript
const ModelErrors = require('model-errors')

class Post {
  constructor(param) {
    this.errors = new ModelErrors()
  }
}
```

```html
<% if (post.errors.exists) { %>
  <section class="row">
    <div class="col">
      <div class="alert alert-danger">
        <h5>
          The form contains <b><%= post.errors.count %></b> errors.
        </h5>

        <ul>
          <% for (let i=0; i < post.errors.count; i++) { %>
            <li>
              <%= post.errors.messages[i] %>
            </li>
          <% } %>
        </ul>
      </div>
    </div>
  </section>
<% } %>
```

## Changelog

Get the project's history in [CHANGELOG.md](CHANGELOG.md).

## Maintainer

Andy Bettisworth <andy@accreu.com> https://andybettisworth.com

## License

This project is released under the [MIT License](LICENSE.txt).
