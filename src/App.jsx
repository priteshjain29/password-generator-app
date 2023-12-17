import Button from "./Components/Button"
import TextFieldComponent from "./Components/TextFieldComponent"
import SliderComponent from "./Components/SliderComponent"
import StatusComponent from "./Components/StatusComponent"
import CheckboxComponent from "./Components/CheckboxComponent"
import { PasswordProvider } from "./context/passwordContext"


function App() {
 

  return (
    <PasswordProvider>
      <div className="bg-hole-black font-jetbrains-mono min-w-screen min-h-screen">
        <h1 className="text-beige-blue text-lg text-center py-2">Password Generator</h1>
        <div className="flex flex-col justify-center content-center w-[350px] md:w-[500px] mx-auto">
          <TextFieldComponent />
          <div className="bg-beige-black p-4">
            <SliderComponent />
            <CheckboxComponent />
            <StatusComponent />
            <div className="px-2">
            <Button />
            </div>
          </div>
        </div>
      </div>
    </PasswordProvider>
  )
}

export default App
