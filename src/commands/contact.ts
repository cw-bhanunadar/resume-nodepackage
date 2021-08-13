import {Command, flags} from '@oclif/command'

export default class Hello extends Command {
  static description = 'This command is used to view bhanu\'s contact details'

  static examples = [
    `$ bhanu-resume contact
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    email: flags.boolean({
      char: 'e',
      description: 'Show emails',
      default: false,
    }),
    phone: flags.boolean({
      char: 'p',
      description: 'Show Phone Number',
      default: false,
    }),
    all: flags.boolean({
      char: 'a',
      description: 'Show All contact details',
      default: false,
    }),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Hello)
    let details = 'Please select an option. Use -h command for help'
    if (flags.all) {
      details = 'Here are the details you are looking for:\nPhone Number:7208755685\nEmail:bhanu.nadar@gmail.com'
    } else if (flags.email) {
      details = 'Here are the details you are looking for:\nEmail:bhanu.nadar@gmail.com'
    } else if (flags.phone) {
      details = 'Here are the details you are looking for:\nPhone Number:7208755685'
    }

    this.log(details)
    if (args.file && flags.force) {
      this.log(`you input --force and --file: ${args.file}`)
    }
  }
}
