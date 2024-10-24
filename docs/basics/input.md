---
title: "Input"
---

# Input

We will now explain how to to access user input (mouse or keyboard), and how to use it in your project easily.

:::note Gamepad
Gamepad support is scheduled for a future release, and is not made available by batFramework.
However it is possible to use the pygame events for gamepad (as any other pygame event) in 
:::

## What is an action

Actions are a structure used to represent an 'action' that can be triggered by any user input. It is then possible to assign one or more mouse and/or keyboard events as triggers for any specific action.

Each action holds a value (in a majority of cases a boolean) that represents if the action is active.

:::note Example
We might want the player to jump by pressing the `<UP>` directional key, but also the `<W>` key on the keyboard.
```python
bf.Action("jump").add_key_control(pygame.K_UP,pygame.K_w)
```
:::
## Why not use events

It is indeed possible to manage input directly, with `if` statements, however this can cause issues in projects with larger scale, as well as hinder code readability.
```python
keys = pygame.key.get_pressed()
if keys[pygame.K_w] or keys[pygame.K_UP]:
    jump()
```
By referring to what you want the player to do with an action like 'jump', it is far more legible and easier to manage than `pygame.K_SPACE or pygame.K_w`. It also makes it modular and allows for easy remapping for actions.

```python
jump_action = bf.Action("jump").add_key_control(pygame.K_UP,pygame.K_w)
if jump_action.is_active():
    jump()
```


## How to use Actions

Create an action with : 
```python
bf.Action("name")
```

### Assigning

You can assign any input methods using `add_<type>_control()` where `<type>` can be either `keyboard`, `mouse` or `event`.
You can combine different input methods in a single action

#### Keyboard

```python
bf.Action("test").add_key_control(pygame.K_UP,pygame.K_w)
```

#### Mouse

```python
bf.Action("test").add_mouse_control(1)
```

:::note Mouse controls
When the argument for `add_mouse_control` is an integer, it refers to the mouse [button mappings](https://pyga.me/docs/ref/mouse.html) from pygame-ce.
:::

#### Events

Although not recommended for long term, it is possible to use events directly as triggers for an action.
In pygame-ce all event types are integers. 

### Trigger type


#### Insantaneous

#### Holding

#### Continuous


### Lifecycle


When an action is created it has to be managed, either manually or automatically.
Here's a rundown of what the action needs each frame to work correctly:
- Call `process_event(event:pygame.Event)`
- Call `reset()` to clear the action

By doing so, it is possible to get the value of the action y--between the process and reset calls

### Example
Here's an example code for a Scene using actions to change the background color.

```python
import batFramework as bf
import pygame
class MyScene(bf.Scene):
    def do_when_added(self):
        self.actions.add(bf.Action("change_color").add_key_control(pygame.K_w,pygame.K_SPACE))



```