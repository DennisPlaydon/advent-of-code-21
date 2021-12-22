with open('input.txt') as f:
    h=[int(i)for i in f.readline().split(',')]
    r=[(t:=[int(n)for _ in range(6)for n in f.readline().split()],
        m:=min(max(h.index(e)for n, e in enumerate(t)if arr>>n&1)
               for arr5 in [(31 << i*5, 1082401 << i) for i in range(5)] for arr in arr5),
        s:=h[m]*sum(e for e in t if e not in h[:m+1])) for _ in range(100)]
print(*(f(r, key=lambda x: x[1])[2] for f in (min, max)))