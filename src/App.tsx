import Button from "./components/Button"
import Menu from "./components/Menu/Menu"


function App() {
  return (
    <div className="h-[2000px]">
      <div className="container p-3 min-w-[1000px] h-[800px] flex items-center justify-center">
        <Menu position="left" offset={20}>
          <Menu.Trigger>
            <Button>
              Open
            </Button>
          </Menu.Trigger>
          <Menu.Dropdown>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>
              <Menu position="right" offset={20}>
                <Menu.Trigger>
                  Open
                </Menu.Trigger>
                <Menu.Dropdown>
                  <Menu.Item>Item 1</Menu.Item>
                  <Menu.Item>
                    <Menu position="right" offset={20}>
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
