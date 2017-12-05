Feature: a calculator    
    Scenario: Make these numbers positive them them up
    Given I have these numbers in a table called "Values"
      | value1     | value2     |
      | -2         | 1          |
      | -3         | 3          |
      | -4         | 3          |
      | -5         | 3          |
      | -6         | 3          |
      | 10         | 3          |
      | 9          | -3         |
      | 8          | -3         |
      | 7          | -3         |
    When I ABS these numbers and add them
    Then the results should be int a table called "Sums"
      | sum     |
      | 3       |
      | 6       |
      | 7       |
      | 8       |
      | 9       |
      | 13      |
      | 12      |
      | 11      |
      | 10      |
