def sol(s):
    answer = ''
    stack = []

    for x in s:
        if x == ')':
            while stack.pop() !='(':
                continue
        else:
            stack.append(x)
    answer = ''.join(stack)
    return answer


a = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
print(sol(a))