def index_of(value, seq):
    # BEGIN
    return seq.index(value)
    # END

def test_issue():
    assert 2 == index_of(5, [1, 2, 5, 3])
