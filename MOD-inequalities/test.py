#!/usr/bin/env pypy3

import random
import math

# 1.33

center = math.sqrt(2)
epsilon = 0.1
for _ in range(10000):
    x = random.uniform(center-epsilon, center+epsilon)
    y = random.uniform(center-epsilon, center+epsilon)
    assert x**4 + y**4 + 8 >= 8*x*y

# 1.58

def cyc_sum(x, y, z, r, s, t):
    ret = 0.0
    for a, b, c in [(x, y, z), (y, z, x), (z, x, y)]:
        ret += a**r * b**s + c**t
    return ret

def random_partition(n):
    ret = [random.uniform(0, 1) for _ in range(n)]
    total = sum(ret)
    return [r / total for r in ret]

def inequality_holds(a, b, c, p, q, r):
    # check (a, b, c) >= (p, q, r) holds for all x, y, z
    center = 1
    epsilon = 0.1
    for _ in range(100):
        x = random.uniform(center-epsilon, center+epsilon)
        y = random.uniform(center-epsilon, center+epsilon)
        z = random.uniform(center-epsilon, center+epsilon)
        if not (cyc_sum(x, y, z, a, b, c) >= cyc_sum(x, y, z, p, q, r)):
            return False
    return True

# (1, 0, 0) >= (p, q, 0)
for _ in range(100):
    p, q = random_partition(2)
    assert(inequality_holds(1, 0, 0, p, q, 0))

# (1, 0, 0) >= (p, q, r)
for _ in range(100):
    p, q, r = random_partition(3)
    assert(inequality_holds(1, 0, 0, p, q, r))

# RMT2 theorem 1

for _ in range(100):
    x, y = random_partition(2)
    p, q, r = random_partition(3)
    if not (min(p*x+q*y, q*x+r*y, r*x+p*y) >= x*y):
        # print(x, y, p, q, r)
        break

x, y, p, q, r = 0.4700492638107376,0.5299507361892624,0.3093885785059035,0.0511730362202965,0.6394383852738
# (x, y, 0) >= (p, q, r) fails
assert(x >= p)
assert(x + y >= p+q)
# print(inequality_holds(x, y, 0, p, q, r))

# RMT2 theorem 1 inequality version

for x in range(1,4):
    for y in range(1,4):
        for p in range(1,4):
            for q in range(1,4):
                for r in range(1,4):
                    if x + y == p + q + r and not (min(p*x+q*y, q*x+r*y, r*x+p*y) >= x*y):
                        print(x, y, p, q, r)

print(inequality_holds(3, 2, 0, 3, 1, 1))