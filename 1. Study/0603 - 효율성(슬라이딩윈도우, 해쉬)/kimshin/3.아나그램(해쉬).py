# a = input()
# b = input()
# dicA = dict()
# dicB = dict()

# for i in a: # A b a A e C e
#     dicA[i] = 0
# for i in a: 
#     if i in dicA: # A가 dic에 있으면
#         dicA[i] += 1

# for i in b: # b a e e A C A
#     dicB[i] = 0
# for i in b: 
#     if i in dicB: # B가 dic에 있으면
#         dicB[i] += 1

# if dicA == dicB:
#     print("YES")
# else:
#     print("NO")

# AbaAeCe  baeeACA

# https://woochan-autobiography.tistory.com/796?category=507807


a = input()
b = input()
dicA = dict()
dicB = dict()

for i in a: # A b a A e C e
    dicA[i] = dicA.get(i, 0)+1
for i in b:
    dicB[i] = dicB.get(i, 0)+1

if dicA == dicB:
    print("YES")
else: 
    print("NO")