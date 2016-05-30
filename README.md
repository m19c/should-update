`should-update`
===============

## SYNOPSIS
One of the main mistakes in a react component is, that the component does not
include a `shouldComponentUpdate` function. Therefore, all the changes made to
a components state or props led to a re-render.

If there is a `shouldComponentUpdate` function, it mostly looks like this:

```javascript
class Example extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.id !== nextProps.id ||
      this.props.name !== nextProps.name ||
      this.props.something !== nextProps.something
    );
  }
}
```

At least, this function will grow as hell if the component held more data.

```javascript
class Example extends Component {
  shouldComponentUpdate(nextProps) {
    return (
      this.props.id !== nextProps.id ||
      this.props.name !== nextProps.name ||
      this.props.something !== nextProps.something ||
      this.props.a !== nextProps.a ||
      this.props.b !== nextProps.b ||
      this.props.c !== nextProps.c ||
      this.props.some.id !== nextProps.some.id
      // ...
    );
  }
}
```

Hmmm... pretty ugly stuff, isn't it? With `should-update` you can reduce the
code of the `shouldComponentUpdate` lifecycle method to a minimum.

**Note**, that `should-update` also accepts nested data. To compare it you need
to separate the keys with a dot (e.g. `some.id` or `user.email.main`).

```javascript
import { shouldUpdate } from 'should-update';

class Example extends Component {
  shouldComponentUpdate(nextProps) {
    return shouldUpdate(
      ['id', 'name', 'something', 'a', 'b', 'c', 'some.id'],
      this.props,
      nextProps
    );
  }
}
```

or:

```javascript
import { createShouldUpdate } from 'should-update';

class Some {
  shouldComponentUpdate: createShouldUpdate(['some', 'value'])
}
```

## API
### `shouldUpdate(alterable, props, upcomingProps)`
- `alterable` - The changeable props.
- `props` - The current props (`this.props`).
- `nextProps` - The upcoming props (`nextProps`).

### `createShouldUpdate(...alterable)`
- `alterable` - The changeable props.

## Install
```
npm i --save should-update
```

## License
The MIT License (MIT)

Copyright (c) 2016 Marc Binder <marcandrebinder@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
