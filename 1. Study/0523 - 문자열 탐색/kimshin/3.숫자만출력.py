li=list(map(str,input()))
m=''
for i in li:
    if ord(i) >= 65 and ord(i) <= 122: 
        continue
    else:
        m += i
print(int(m))
