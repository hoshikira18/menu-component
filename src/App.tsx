import Button from "./components/Button"
import Menu from "./components/Menu/Menu"

function App() {
  return (
    <div className="overflow-scroll h-screen">
      <div className="h-[1000px] w-[1000px] relative flex items-center justify-center bg-blue-200">
        test
        <Menu position="left" offset={10}>
          <Menu.Trigger>
            <Button>
              Open
            </Button>
          </Menu.Trigger>
          <Menu.Dropdown>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>
              <Menu position="left" offset={10}>
                <Menu.Trigger>
                  Open
                </Menu.Trigger>
                <Menu.Dropdown>
                  <Menu.Item>Item 1</Menu.Item>
                  <Menu.Item>
                    <Menu position="left" offset={20}>
                      <Menu.Trigger>
                        Open
                      </Menu.Trigger>
                      <Menu.Dropdown>
                        <Menu.Item>Item 1</Menu.Item>
                        <Menu.Item>Item 2</Menu.Item>
                        <Menu.Item>Item 3</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div></div>
  )
}

export default App
