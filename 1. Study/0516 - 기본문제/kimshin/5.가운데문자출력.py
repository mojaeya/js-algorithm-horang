n=input()

if len(n) % 2 != 0:
    print(n[len(n)//2])
else:
    print(n[(len(n)//2-1):(len(n)//2+1)])