const global = {
  dateTitle: 'Date',
  bondTitle: 'Bond',
  listTitle: 'List',
  unitTitle: 'Units',
  remainingUnitTitle: 'Remaining Units'
}

const authorization = {
  loginTitle: 'Account Login',
  loginDesc: 'Sign in to continue',
  loginButton: 'Login',
  registerButton: 'Register',
  backToLogin: 'Back to Login',
  phoneNumber: 'Phone Number',
  email: 'Email',
  send: 'Send',
  forgetPasswordTitle: 'Forgot your password?',
  forgetPasswordInfo: 'Insert you email, System will verify by OTP to your email',
  switchLanguage: 'Switch Language',
  resetPassword: 'Reset Password',
  accept: 'Accept',
  newPassword: 'New Password',
  confirmNewPassword: 'Confirm New Password',
  resetPasswordHeader: 'Please confirm to change password in your email',
  registerTitle: 'Register',
  citizenNumberTitle: 'Citizen number',
  phone: 'Phone number',
  registerAcceptButton: 'Accept to Register'
};

const bondDetailScreen = {
  detailHeader: 'Detail',
  qrcodeBondScan: 'scan to show',
  bondNameTitle: 'Bond name',
  maturityDateTitle: 'Maturity Date',
  registerDateTitle: 'Register Date',
  registerDurationTitle: 'Start Duration',
  durationDateTitle: 'Remain Duration',
  bondRankingTitle: 'Rating',
  burdenTitle: 'Burden',
  registrarTitle: 'Registrar',
  securityAccountTitle: 'Security Account',
  benefitAccountTitle: 'Benefit Account',
  interestRateTitle: 'Interest Rate',
  password: 'Password',
  confirmPassword: 'Confirm password',
  durationToPayInterestTitle: 'Duration to pay interest',
  lastestToPayInterestTittle: 'Lastest to pay interest',
  seeMoreToPayInterest: 'See more term',
  interestTerm: 'term',
  seeMoreBond: 'see more detail',
  dayToInvest: 'Date',
  businessSection: 'Business section',
  benefit: 'benefit',
  totalValue: 'Total Value',
  baht: 'Baht',
  unit: 'Unit',
  movement: 'Movement'
}

const transaction = {
  subscribe: 'subscribe',
  transferSelfAccount: 'self account',
  transferOut: 'out',
  transferIn: 'in',
  pledge: 'pledge',
  unknown: 'unknown'
}

const portfolio = {
  portfolioLabel: 'Portfolio',
  portfolioTitle: 'PORTFOLIO',
}

const schedule = {
  scheduleLabel: 'Schedule',
  graphLabel: 'Graph',
  graphScreenTitle: 'Interest and Principal payments',
  selectYear: 'Select year',
  selectBond: 'Select bond',
  interest: 'Interest',
  interestAndPayment: 'Interest/Principles',
  principalPayment: 'Principle'
}

const statement = {
  statementTitle: 'STATEMENT',
  statementWarning: '* you can scroll the table for more detail'
}

const profile = {
  profile: 'Profile',
  seeProfile: 'Profile',
  profileSetting: 'Profile Setting'
}

const bank = {
  accountLabel: 'Account',
  securityAccount: 'Securities Account',
  bankAccount: 'Bank Account'
}

const otp = {
  otpTitle: 'Receive OTP password',
  otpDesc: 'for verify your registeration',
  otpPlaceholder: 'please insert OTP password',
  repeatOtp: 'Repeat OTP Request'
}

const news = {
  newsLabel: 'News',
  newsTitle: 'Incoming News',
  newsSearch: 'Search...'
}

const notification = {
  notificationTitle: 'Notification'
}

const benefit = {
  benefitTitle: 'Benefit',
  benefitDesc: 'Bond detail',
  symbol: 'Symbol',
  broker: 'Broker',
  account: 'Account',
  benefitBank: 'Bank',
  accountBank: 'Account',
  address: 'Address'
}

const sortBy = {
  nameLabel: 'Name',
  unitLabel: 'Units',
  rankLabel: 'Rank',
  bsLabel: 'Business Sector',
  timeLabel: 'Time',
  titleLabelSortBy: 'Sort by'
}

const calendar = {
  xiLabel: "Excluding Interest",
  xaLabel: "Excluding All",
  xmLabel: "Excluding Meeting",
  mdLabel: "Meeting Date",
  pLabel: "Payment Date",
  eventLabel: "EVENT"
}

export default {
  ...global,
  ...authorization,
  ...bondDetailScreen,
  ...transaction,
  ...portfolio,
  ...statement,
  ...profile,
  ...bank,
  ...otp,
  ...schedule,
  ...news,
  ...notification,
  ...benefit,
  ...sortBy,
  ...calendar
};
