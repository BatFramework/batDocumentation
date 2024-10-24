---
sidebar_position: 3
---

# Entities

We will assume you are familiar with the pygame-ce library fundamentals in the following, if not please refer to the [pygame-ce docs](https://pyga.me/docs/).


## Attributes

Entities the things that will fill your scene, be it players, NPCs, interfaces, or even a whole level.

Each entity has the following attributes :
- `rect : pygame.FRect` : an object that represents the entity's position and size
- `uid : int` : a unique id for every entity created
- `tags : list[str]` : list of tags
- `debug_color: tuple | str` : a color used to outline the entity in the debugging view
- `parent_scene : Scene | None` : a pointer to the scene where the entity is added, None if the entity isn't added.

Furthermore, there are methods available to use these attributes, such as :

- `set_position(self, x, y)`
- `add_tags(self, *tags)`
- ...




## Lifecycle

As soon as an entity is added to a scene via `scene.add_world_entity()` or `scene.add_hud_entity()` it is managed by that scene, which means do the following in order: 

- The scene will propagate events to the entity
- The scene will update the entity every frame
- The scene will draw the entity if it's `Drawable`





 
