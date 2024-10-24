# Fireworks 🎉

Here's a program that spawns particles to form fireworks every second at a random position on the screen.

```python
import batFramework as bf
import pygame
from random import randint
class MainScene(bf.Scene):
    def __init__(self):
        super().__init__("main")

    def do_when_added(self):
        self.pg = bf.ParticleGenerator()
        self.add_world_entity(self.pg)

        bf.Timer(duration=1,end_callback=self.generate,loop=True).start()

    def generate(self):
        position = bf.utils.random_point_on_screen()
        for _ in range(600):
            velocity = pygame.math.Vector2(randint(20,300),0)
            velocity.rotate_ip(randint(0,360)) 
            p = bf.BasicParticle(
                position,velocity,
                color=bf.utils.random_color()
            )
            self.pg.add_particle(p)

bf.init(
    resolution=(640,480),
    flags=pygame.SCALED,
    fps_limit=60
)
bf.Manager(MainScene()).run()
```

You can see the result [here](pathname:///examples/fireworks/index.html).

:::tip SCALED flag
You can pass the `pygame.SCALED` flag to `bf.init()` to scale the window, making it bigger when the `resolution` is too small. 
:::

