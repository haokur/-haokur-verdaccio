module.exports = {
    meta: {
        fixable: "code",
    },
    create: function (context) {
        return {
            Program(node) {
                const sourceCode = context.getSourceCode();
                const regex = /<<<{2}|>{3}/g;
                const text = sourceCode.getText();

                let match;
                while ((match = regex.exec(text)) !== null) {
                    context.report({
                        node,
                        message: "Avoid using '<<<<' or '>>>>' in code",
                        loc: {
                            start: sourceCode.getLocFromIndex(match.index),
                            end: sourceCode.getLocFromIndex(match.index + match[0].length),
                        },
                    });
                }
            },
        };
    },
};
