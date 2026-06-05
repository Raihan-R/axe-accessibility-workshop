function formatViolations(violations) {
  violations.forEach((violation, index) => {
    console.log('\n========================================');
    console.log(`Violation ${index + 1}`);
    console.log('========================================');
    console.log(`Rule:        ${violation.id}`);
    console.log(`Impact:      ${violation.impact}`);
    console.log(`Description: ${violation.description}`);
    console.log(`Help:        ${violation.help}`);
    console.log(`More info:   ${violation.helpUrl}`);

    console.log('\nAffected elements:');

    violation.nodes.forEach((node, nodeIndex) => {
      console.log(`\n  ${nodeIndex + 1}. ${node.target.join(', ')}`);
      console.log(`     HTML: ${node.html}`);
    });
  });
}

function findViolation(results, ruleId) {
  return results.violations.find((violation) => violation.id === ruleId);
}

module.exports = { formatViolations, findViolation };
