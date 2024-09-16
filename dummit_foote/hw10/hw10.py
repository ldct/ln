#!/usr/bin/env python3

from math import comb, factorial

def entry(n, t):
    ret = 1
    for i in range(t):
        ret *= comb(n - 2*i, 2)
    return ret / factorial(t)

def f_entry(n, t):
    return (n - 2*t) / (t+1)


def print_row(n):
    for i in range(1, int(n/2)+1):
        print(entry(n, i), end='\t')
    print()

for n in range(5, 20):
    print_row(n)