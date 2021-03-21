describe("My First Unit Test", function () {
  it("Does not do much!", function () {
    const sum = 1 + 1;
    expect(2).to.equal(sum);
  });
});
const url = "https://www.sfcinemacity.com";
const todayDate = Cypress.moment().format("DD MMM YYYY");
const nowTime = Cypress.moment().format("HH:mm");
const expectTime = Cypress.moment().add(1, "hours").format("HH:mm");
const nameMovie = "Raya and the Last Dragon";
const locationMovie = "SFX CINEMA Central Rama 9";
describe("Check Time Movie", () => {
  it("Go to url", () => {
    cy.visit(url);
    cy.get('[class="button button-enter-site"]')
      .contains("เข้าสู่เว็บไซต์")
      .click();
  });
  it('Change language', () => {
    cy.get('[class="lang-switcher"]>li').each($el => {
      if ($el.get(0).innerText === 'ENG') {
         cy.wrap($el).click()
      }
 })
  cy.get('[class="top-navigation"]').contains('Login/Sign up')
 })
  it('Select Cinema', () => {
    cy.get('[class="button dropdown-button"]')
      .contains('Select Cinema')
      .click()
    cy.contains(locationMovie)
      .click()
 })
 it('Select Movie', () => {
    cy.get('[class="button dropdown-button"]')
      .contains('All Movie')
      .click()
    cy.get('h3[class="name"]')
      .contains(nameMovie)
      .click()
    cy.get('[class="button showtime-button"]')
      .contains('Showtime')
      .click()
 })
 it('Check Date Movie', () => {
    cy.get('[class="selected"]>p')
      .contains(todayDate)
 })
 it('Check Time Movie', () => {
    cy.get('[class="showtime-list"]>div')
      .children()
      .children()
      .children()
      .children()
 })
 it('Check Time Movie', () => {
    cy.get('[class="time-list"]>li').each($list => {
     console.log($list.get(0).innerText)
    })
 })
});