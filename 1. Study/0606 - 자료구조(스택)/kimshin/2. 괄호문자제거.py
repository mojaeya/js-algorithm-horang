def sol(s):
    answer = ''
    stack = []

    for x in s:
        if x == ')':
            while True:
                if stack.pop()!='(':
                    stack.pop() 
                stack.pop() 
                break
        else:
            stack.append(x)
    answer = ''.join(stack)
    return answer


a = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
print(sol(a))