# Toy Zone

Simple React Dropzone component.

## Props

**onFilesAdded** - Triggered after files are uploaded.

**loading** - Loading indicator

## Usage

```javascript
import React, { Component } from "react";
import ToyZone from "toy-zone";

class App extends Component {
  handleFiles(files) {
    console.log(files);
  }

  render() {
    return <ToyZone onFilesAdded={this.handleFiles} />;
  }
}

export default App;
```