---
sidebar_position: 1
---

# Manager


## Overview

The manager's job is to organize the scenes and handle all the different modules and their initializations, such as the AudioManager, or the TimeManager.

## How to use it 

In most cases, the manager can be used as is by passing at least one scene to the constructor, like so:

```python

import batFramework as bf

bf.init((640,480))

bf.Manager(bf.Scene("main")).run()

```


## How it works

The `Manager` class inherits from `SceneManager`.

### Scene Manager

The `SceneManager` stores the different scenes in a **stack** and provides methods to operate on that stack.



#### Scene stack

Here are the basic operations you have on the scene stack.

- `add_scene(self, scene: bf.Scene)->None`
- `remove_scene(self, name: str)->None`
- `has_scene(self, name:str)->bool`
- `get_scene(self, name:str)->Scene|None`
- `get_scene_at(self, index: int) -> bf.Scene | None`
- `set_scene(self, scene_name, index=0)`

