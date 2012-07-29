from math import sqrt

for n in range(1,10000000):
    guess = round(sqrt(2*n**2))
    if abs(sqrt(2) - guess/n) < 1./n**2:
        print n, abs(sqrt(2) - guess/n), "<", 1./n**2
