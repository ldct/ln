#!/usr/bin/env pypy3

import random
import math

# Z1.9

for _ in range(100000000):
    x = random.uniform(0, 100)
    y = random.uniform(0, 100)
    z = random.uniform(0, 100)

    if x*y > 1 and y*z > 1 and x*z > 1:
        assert(x + y + z > 1/x + 1/y + 1/z)
