#!/usr/bin/env python3

def print_tab(n):
    i = n
    while i != 1:
        print(f"{i}, ",end="")
        i *= n
        i %= 36
    print(i)

print_tab(5)
print_tab(13)
print_tab(-13)
print_tab(17)