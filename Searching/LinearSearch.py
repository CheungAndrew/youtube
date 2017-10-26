def linear_search(arr, target):

    for i in range(len(arr)):
        if (target == arr[i]):
            return i
    return -1


def main():

    arr = [1, 2, 3, 4, 16, 15, 14, 11]
    target = 14

    result = linear_search(arr, target)
    print(result)


main()
