def reverse(s):
    # BEGIN
    return s[::-1]
    # END

def test_issue():
    s = "ehuha"
    assert "ahuhe" == reverse(s)

