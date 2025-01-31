const navigationData = {
    id: 'example-document-template-navigation',
    label: "Example Document Template",
    group: "configurations",
    order: 800,
    link: "/services/web/sample-db-blob/gen/codbex-templates/ui/Templates/index.html?embedded"
};

function getNavigation() {
    return navigationData;
}

if (typeof exports !== 'undefined') {
    exports.getNavigation = getNavigation;
}

export { getNavigation }
