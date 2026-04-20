import { Badge } from "@/components/ui/Badge";
import { en } from "@/lib/i18n/en";

const { competitive } = en;

/**
 * CompetitiveSection — comparison table showing Adaptek's structural edge
 * over big-four firms, boutique AI firms, and accessibility firms.
 */
export function CompetitiveSection() {
  // Render a cell value (boolean or string like "limited"/"varies")
  const CellValue = ({
    value,
    isAdaptek,
  }: {
    value: boolean | string;
    isAdaptek?: boolean;
  }) => {
    if (value === true) {
      return (
        <span
          aria-label="Yes"
          className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${
            isAdaptek
              ? "bg-brand-orange text-white"
              : "bg-brand-green-light text-brand-green"
          }`}
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      );
    }
    if (value === false) {
      return (
        <span
          aria-label="No"
          className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-gray-400"
        >
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      );
    }
    // "limited" | "varies"
    return (
      <span
        aria-label={value}
        className="text-xs text-brand-charcoal-light font-medium italic"
      >
        {value}
      </span>
    );
  };

  return (
    <section
      aria-labelledby="competitive-heading"
      className="py-section bg-white"
    >
      <div className="container-content">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="orange" className="mb-4">
            {competitive.sectionLabel}
          </Badge>
          <h2
            id="competitive-heading"
            className="font-sans font-bold text-3xl md:text-4xl text-brand-charcoal mb-4"
          >
            {competitive.headline}
          </h2>
          <p className="text-brand-charcoal-light text-lg leading-relaxed">
            {competitive.subheadline}
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-10">
          <table className="w-full text-sm" role="table">
            <thead>
              <tr className="border-b border-gray-100">
                <th
                  scope="col"
                  className="text-left px-6 py-4 text-brand-charcoal-light font-medium text-xs uppercase tracking-wider w-1/3"
                >
                  Capability
                </th>
                {competitive.columns.map((col, i) => (
                  <th
                    key={col}
                    scope="col"
                    className={`text-center px-4 py-4 font-semibold text-sm ${
                      i === 0
                        ? "text-brand-orange bg-brand-orange-light/20"
                        : "text-brand-charcoal-light"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {competitive.rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-gray-50 last:border-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="px-6 py-4 text-brand-charcoal font-medium text-sm">
                    {row.capability}
                  </td>
                  {row.values.map((val, j) => (
                    <td
                      key={j}
                      className={`px-4 py-4 text-center ${
                        j === 0 ? "bg-brand-orange-light/10" : ""
                      }`}
                    >
                      <CellValue value={val} isAdaptek={j === 0} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Closing line */}
        <p className="text-center text-brand-charcoal-light text-sm leading-relaxed max-w-2xl mx-auto italic">
          {competitive.closingLine}
        </p>
      </div>
    </section>
  );
}
