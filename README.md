# dark-horse-server

The Dark Horse server hosts Dark Horse things and the [Dark Horse UI](https://github.com/bergos/dark-horse-ui).
Dark Horse can be used for home automation or in any other Web of Things environment.
Hosting a thing means you can access it RESTful over HTTP with a self described Linked Data API using [Hydra](http://www.hydra-cg.com/).

## Usage

The Dark Horse server comes with a virtual device setup out of the box.
To start the server just run:

    node index

Now you can open the Dark Horse UI in your browser at:

    http://localhost:8080/ui/

Or if you access it with a Hydra client, start at the root.
Because the API is self describing it will show you the way to your things:

    http://localhost:8080/

### Configuration

First copy `config.default.js` to `config.js`.
The server uses `config.default.js` only if `config.js` was not found.
Also copy one of the `setup-*.js` files, change it for your needs and point to it in the `config.js`.
You may need additional things.
Dark Horse things Packages use the name pattern `dark-horse-thing-*`.
Just install them with npm.

###

The Dark Horse server uses the [hydra-middleware](https://github.com/bergos/hydra-middleware) package to serve the Hydra HTTP API.
All things inherit from the [SimpleRDF](https://github.com/simplerdf/simplerdf) class, which does the RDF graph handling.
The [dark-horse-thing](https://github.com/bergos/dark-horse-thing) package contains many abstract classes which can be used as bases classes to implement real things.
