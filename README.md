# Tato Ariato Terriatodor - The Asynchronous Headless Webkit Test Generator

Simplified asynchronous headless webkit test generator based on textile specifications.
  
* Allows you to write specs in Textile format
* Generates asynchronous headless webkit tests for Phantom

### Usage

```
  $ tat examples/
```

### Example Inputs (Textile)

```
h1. Microsoft SQL - Homepage Specification

h2. http://www.microsoft.com/sqlserver/en/us/default.aspx

h3. a user lands on the homepage

* should always have the correct title

* should always have ten items in the Top 10 Benchmarks carousel

* should always have three tabs in the hero carousel

* should always have at least four Tech Docs items

* should always have at least four Evidence items
```

### Example Output (Phantom JavaScript spec)

```
  var page = new WebPage();
  page.onConsoleMessage = function(msg) { console.log(msg); };
  page.open(encodeURI("http://www.microsoft.com/sqlserver/en/us/default.aspx"), function (status) {
    if (status !== "success") {
      console.log("Unable to access network");
    } else {
    
      when("a user lands on the page")
        .it("should always have the correct title", function() {

        })
        .it("should always have ten items in the Top 10 Benchmarks carousel", function() {

        })
        .it("should always have three tabs in the hero carousel", function() {  
          
        })
        .it("should always have at least four Tech Docs items", function() {
          
        })
        .it("should always have at least four Evidence items", function() {
          
        })
      .run(); 
    }
    phantom.exit();
  });
```



### MIT License


(The MIT License)

Copyright (c) 2011 Jaime Bueza &lt;jbueza@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

