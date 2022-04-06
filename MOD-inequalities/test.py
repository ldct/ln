#!/usr/bin/env pypy3

import random

a = random.uniform(0.8, 1.2)
b = random.uniform(0.8, 1.2)
c = 1/(a*b)

p = a*b-b+1
q = b*c-c+1
r = a*c-a+1
print(p, q, r)
print((p+q+r)/3)
print(p*q*r)
