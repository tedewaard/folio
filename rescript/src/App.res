@module("./assets/rescript-logo.svg")
external rescript: string = "default"

@module("./assets/vite.svg")
external vite: string = "default"

@react.component
let make = () => {
  <div className="w-screen h-screen">
    <Header>
    </Header>
    <main className="">
      {"Testing"->React.string}
    </main>
    <Footer>
    </Footer>
  </div>
}
