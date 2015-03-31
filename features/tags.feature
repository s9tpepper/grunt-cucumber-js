Feature: Testing tags
  As a grunt-cucumber-js dev
  I want a Testing.feature file with tags
  So that I can test the tag functionality of cucumber-js-task

  @wip
  Scenario: Tagged wip
    Given I have the number 1 and 3
    When I add them together
    Then I should have 4

  @tag
  Scenario: Tagged tag
    Given I have the number 1 and 3
    When I add them together
    Then I should have 4

  Scenario: No tags
    Given I have the number 1 and 3
    When I add them together
    Then I should have 4

  @wip @tag
  Scenario: Tagged wip and tag
    Given I have the number 1 and 3
    When I add them together
    Then I should have 4
