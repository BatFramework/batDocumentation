---
sidebar_position: 2
---

# Scenes

Scenes are a fundamental part of your game. They make it so that everything is neatly organized.

## Why Scenes ?

As an example, picture a game with a title screen and a settings menu.
Whithout scenes, the gameloop would contain code for both of those screens.

After a while, you might add a game screen, a pause menu, etc...
At this point your gameloop would be very busy from all the different code needed to handle all those different screens.

So as a good developer, you'd think to shorten and simplify your code by making functions or classes that encapsulate the logic of each scene to keep the gameloop neat and clean.
That's basically what scenes do !

## Basics

### World and Hud

Each scene manages two types of entities : **WORLD** entities and **HUD** entities.  
World entities are processed first, followed by HUD entities.
For example, a player character would be in the world space, so it should be added as a world entity, as opposed to a life meter, or score counter that would be a HUD entity.

### How to use a Scene

As said previously, to modify the behavior of a scene you have to inherit the `Scene` class.
```python
class MyScene(bf.Scene):...
```

Now you have access to a lot of methods from the class, let's review the most important ones:

- **`do_when_added(self)`** is called only once in the lifetime of the Scene instance, when it is linked with the Manager. You can initialize variables and entities for your scene in this method. Incidentally, the `manager` attribute of the `Scene` class serves as a pointer to the game manager, and is only accessible once this function has been called.
- **`do_update(self,dt:float)`** is called every frame with `dt` being the time elapsed since the last frame (in milliseconds)
- **`do_on_enter(self)`** is called once every time the scene goes on top of the stack.
- **`do_on_exit(self)`** is called once every time the scene goes from the top of the stack to any position, including the top.
- **`add_world_entity(self, *entities: bf.Entity)`** add one or more world `entity` to your scene.
- **`remove_world_entity(self, *entities: bf.Entity)`** remove one or more world `entity` from your scene.
- **`add_hud_entity(self, *entities: bf.Entity)`** add one or more hud `entity` to your scene.
- **`remove_hud_entity(self, *entities: bf.Entity)`** remove one or more hud `entity` from your scene.

:::tip Check the sources
Check the source code on [github](https://github.com/BatFramework/batFramework) to see all the methods available to you.
:::