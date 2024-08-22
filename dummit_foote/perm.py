#!/usr/bin/env python3

def permutation_from_cyclic_decomposition(cycles):
    permutation = {}
    for cycle in cycles:
        for i in range(len(cycle)):
            permutation[cycle[i]] = cycle[(i + 1) % len(cycle)]
    return permutation

def cyclic_decomposition(permutation):
    cycles = []
    visited = set()
    for i in permutation:
        if i in visited:
            continue
        cycle = []
        while i not in visited:
            cycle.append(i)
            visited.add(i)
            i = permutation[i]
        if len(cycle) > 1:
            cycles.append(tuple(cycle))
    return cycles

def compose(p1, p2):
    return {i: p1[p2[i]] for i in p1._permutation.keys() | p2._permutation.keys()}

class Permutation:
    def __init__(self, _permutation) -> None:
        self._permutation = _permutation

    @classmethod
    def from_cycles(cls, *cycles) -> 'Permutation':
        return cls(permutation_from_cyclic_decomposition(cycles))
    
    @classmethod
    def from_cycle(cls, *cycle) -> 'Permutation':
        return cls(permutation_from_cyclic_decomposition([cycle]))
    
    @classmethod
    def identity(cls) -> 'Permutation':
        return cls(dict())

    def __repr__(self) -> str:
        return str(cyclic_decomposition(self._permutation))
    
    def __getitem__(self, key):
        if key not in self._permutation:
            return key
        return self._permutation[key]

    def __mul__(self, other) -> 'Permutation':
        if isinstance(other, Permutation):
            return Permutation(compose(self, other))
        return NotImplemented
    
    def inv(self):
        return Permutation({v: k for k, v in self._permutation.items()})
    
class Coset:
    def __init__(self, *permutations):
        self.permutations = permutations

    def __mul__(self, p: Permutation):
        r = [perm * p for perm in self.permutations]
        return Coset(*r)
    
    def __rmul__(self, p: Permutation):
        r = [p * perm for perm in self.permutations]
        return Coset(*r)
    
    def __repr__(self) -> str:
        return str(self.permutations)

# N = Coset(Permutation.from_cycle(1, 2), Permutation.identity())

# p23 = Permutation.from_cycle(2, 3)
# p123 = Permutation.from_cycle(1, 2, 3)
# p132 = Permutation.from_cycle(1, 3, 2)

# t1 = H*p23
# print(t1)

# # conjugate t1 by p23
# print(p23.inv() * t1 * p23)

# # conjugate t1 by p123
# print(p123.inv() * t1 * p123)

# Is the product of two cyclic permutations a cyclic permutation?

p1 = Permutation.from_cycle(1, 2, 3, 4, 5)
p2 = Permutation.from_cycle(1, 2, 4, 5, 3)

print(p1 * p2 * p2 * p2)