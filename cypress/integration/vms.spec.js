describe("My First Unit Test", function () {
    it("Does not do much!", function () {
      const sum = 1 + 1;
      expect(2).to.equal(sum);
    });
    const url =  "localhost:3000/login";
    it("Go to url", () => {
        cy.visit(url);
        cy.get('[name = "username"]').click().type("admin")
        cy.get('[name = "password"]').click().type("123456")
        cy.get('[class=" focus:outline-none bg-primary-500 text-white rounded-full py-2 px-24 w-full hover:ring-primary-400 hover:ring "]').click()
        cy.get('[class=" max-w-full flex-initial"]').contains('รหัสพนักงานหรือรหัสผ่านไม่ถูกต้อง')
      });
  });