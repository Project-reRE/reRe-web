interface Props {
  children: React.ReactNode;
  active: string | number;
  value: string | number;
  className?: string;
}

function TabPanel(props: Props) {
  const { children, value, active, className, ...other } = props;

  return (
    <section
      role="tabpanel"
      hidden={value !== active}
      id={`simple-tabpanel-${active}`}
      aria-labelledby={`simple-tab-${active}`}
      {...other}
      className={className}
    >
      {value === active && <>{children}</>}
    </section>
  );
}

export default TabPanel;
