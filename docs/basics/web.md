---
title: Export to Web
---


If you want to deploy your batFramework project, you can use `pybag`:
```bash
pip3 install pygbag --user --upgrade
```
Then modify your `main.py` file to include the following:
```python
# /// script
# requires-python = ">=3.11"
# dependencies = [
#   "batFramework"
# ]
# ///
import batFramework as bf
import asyncio

class MainScene(bf.Scene):...
### your code here

bf.init((640,480))
asyncio.run(bf.Manager(MainScene()).run_async())
```
Finally run pybag on the folder containing your main.py file:
```bash
pygbag your.app.folder
```
More info [here](https://github.com/pygame-web/pygbag).