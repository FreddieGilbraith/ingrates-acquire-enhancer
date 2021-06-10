# Ingrates Acquire Enhancer

> Get an existing child, spawn if it doesn't exist

## Usage

```javascript
function Child() {}

function SomeActor({ acquire, children }) {
  console.log(children.myChild); //undefined
  console.log(acquire.myChild(Child)); //Mw9mMOigEx3Xpu30V6gHq2pG
  console.log(acquire.myChild(Child)); //Mw9mMOigEx3Xpu30V6gHq2pG
}
```
