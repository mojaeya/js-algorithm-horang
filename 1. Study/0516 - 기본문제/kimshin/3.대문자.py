n=input()
cnt=0
M=''
re=''
for i in range(len(n)):
    if n[i] == n[i].upper():
        cnt+=1 
    else:
        continue
for i in range(len(n)):
    if n[i] == n[i].upper():
        re += n[i].lower()
    else:
        re += n[i].upper()
print(cnt)
print(n.upper())
print(re)