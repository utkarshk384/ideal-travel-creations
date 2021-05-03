import _ from "lodash";

class _Utilities {
  public startCase(str: string) {
    if (typeof str !== "string") return str;

    const conjunctions = ["And", "Of", "To", "Between", "Or", "Because", "In"];
    str = _.startCase(str);
    for (let i = 0; i < conjunctions.length; i++) {
      str = str.replace(
        new RegExp(conjunctions[i], "g"),
        _.lowerCase(conjunctions[i])
      );
    }
    return str;
  }

  public sanitizeMarkdown(str: string): string {
    const mdSyntax = ["#", "---", ""];

    for (let i = 0; i < mdSyntax.length; i++) {
      str = str.replace(new RegExp(mdSyntax[i], "g"), _.lowerCase(mdSyntax[i]));
    }

    return str;
  }
}

const Utilities = new _Utilities();
export default Utilities;
