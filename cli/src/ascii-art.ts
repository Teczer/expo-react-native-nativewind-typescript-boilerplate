import kleur from 'kleur';

export function printBanner() {
  const cyan = kleur.cyan;
  const bold = kleur.bold;
  const yellow = kleur.yellow;
  const green = kleur.green;

  const banner = `
${bold(cyan('███████╗ █████╗ ███████╗████████╗'))}
${bold(cyan('██╔════╝██╔══██╗██╔════╝╚══██╔══╝'))}
${bold(cyan('█████╗  ███████║███████╗   ██║'))}
${bold(cyan('██╔══╝  ██╔══██║╚════██║   ██║'))}
${bold(cyan('██║     ██║  ██║███████║   ██║'))}
${bold(cyan('╚═╝     ╚═╝  ╚═╝╚══════╝   ╚═╝'))}

${bold(yellow('███████╗██╗  ██╗██████╗  ██████╗'))}
${bold(yellow('██╔════╝╚██╗██╔╝██╔══██╗██╔═══██╗'))}
${bold(yellow('█████╗  ╚███╔╝ ██████╔╝██║   ██║'))}
${bold(yellow('██╔══╝  ██╔██╗ ██╔═══╝ ██║   ██║'))}
${bold(yellow('███████╗██║╚██╗██║     ╚██████╔╝'))}
${bold(yellow('╚══════╝╚═╝ ╚═╝╚═╝      ╚═════╝'))}

${bold(green(' █████╗ ██████╗ ██████╗'))}
${bold(green('██╔══██╗██╔══██╗██╔══██╗'))}
${bold(green('███████║██████╔╝██████╔╝'))}
${bold(green('██╔══██║██╔     ██╔   '))}
${bold(green('██║  ██║██║     ██║'))}
${bold(green('╚═╝  ╚═╝╚═╝     ╚═╝'))}
`;
  console.log(banner);
}
